# Bulk Delete

![Version](https://img.shields.io/badge/version-9.12.2025-blue)


A Frappe app that adds bulk delete functionality to Error Log list view.

## Features

- **Delete All Button**: Adds a "Delete All" button to Error Log list view
- **Confirmation Dialog**: Shows confirmation before deletion
- **System Manager Only**: Only users with System Manager role can delete

## Installation

```bash
bench get-app https://github.com/abdopcnet/bulk_delete.git
bench install-app bulk_delete
bench restart
```

## Usage

1. Navigate to Error Log list view
2. Click "Delete All" button
3. Confirm deletion
4. All error logs will be deleted

## License

MIT
