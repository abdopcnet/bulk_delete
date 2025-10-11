frappe.listview_settings['Error Log'] = {
    onload: function(listview) {
        listview.page.add_inner_button('Delete All', function() {
            frappe.confirm('Are you sure you want to delete all error logs?', function() {
                frappe.call({
                    method: 'frappe.core.doctype.error_log.error_log.clear_error_logs',
                    callback: function() {
                        listview.refresh();
                    }
                });
            });
        });
    }
};
