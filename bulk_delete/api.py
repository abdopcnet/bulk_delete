import frappe
from frappe import _
from frappe.desk.doctype.bulk_update.bulk_update import show_progress


@frappe.whitelist()
def delete_all_deleted_documents():
    """Delete all deleted documents permanently"""
    frappe.only_for("System Manager")

    # Get all deleted documents
    deleted_docs = frappe.get_all("Deleted Document", fields=["name"])

    if not deleted_docs:
        frappe.msgprint(_("No deleted documents found"))
        return {"deleted": 0}

    deleted_count = 0
    message = _("Deleting Deleted Documents")

    for i, doc in enumerate(deleted_docs):
        try:
            show_progress(deleted_docs, message, i + 1, doc.name)
            frappe.delete_doc("Deleted Document", doc.name, force=True)
            frappe.db.commit()
            deleted_count += 1
        except Exception:
            frappe.clear_last_message()
            frappe.db.rollback()
            frappe.log_error(f"Error deleting Deleted Document {doc.name}")

    return {"deleted": deleted_count}
