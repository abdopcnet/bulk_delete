frappe.listview_settings["Deleted Document"] = {
  onload: function (listview) {
    listview.page
      .add_inner_button(__("Delete All"), function () {
        frappe.confirm(
          __("Are you sure you want to permanently delete all deleted documents? This action cannot be undone."),
          function () {
            // User confirmed
            frappe.call({
              method: "bulk_delete.api.delete_all_deleted_documents",
              freeze: true,
              freeze_message: __("Deleting all deleted documents..."),
              callback: function (r) {
                if (!r.exc) {
                  frappe.show_alert({
                    message: __("All deleted documents have been permanently deleted"),
                    indicator: "green",
                  });
                  listview.refresh();
                }
              },
            });
          },
          function () {
            // User cancelled
            frappe.show_alert({
              message: __("Operation cancelled"),
              indicator: "orange",
            });
          }
        );
      })
      .addClass("btn-danger");
  },
};
