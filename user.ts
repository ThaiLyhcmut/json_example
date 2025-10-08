module.exports = function () {
  return {
    _id: "6749933810905d9ddbd0104b",
    is_active: true,
    meta_data: {},
    title: "User",
    mongodb_collection_name: "user",
    entity_group: [],
    unique_keys: "",
    use_parent: false,
    use_parent_delete_childs: false,
    use_locale: false,
    use_block: false,
    use_seo_path: false,
    json_schema: {
      type: "object",
      properties: {
        username: {
          type: "string",
          widget: "shortAnswer",
          filter: true,
          title: "Username",
          description: "Nhập thông tin user name",
          dependencies: {}
        },
        email: {
          title: "Email",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          description: "Nhập email",
          dependencies: {}
        },
        first_name: {
          title: "First Name",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          description: "Nhập first name",
          dependencies: {}
        },
        last_name: {
          type: "string",
          widget: "shortAnswer",
          filter: true,
          title: "Last Name",
          description: "Nhập last name",
          dependencies: {}
        },
        full_name: {
          title: "Full Name",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          hidden: false,
          description: "Thông tin full name",
          dependencies: {}
        },
        featured_image: {
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "file",
          title: "Avatar",
          description: "Chọn avatar",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        cover: {
          title: "Cover",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "file",
          filter: false,
          description: "Chọn hình cover",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        phone: {
          title: "Phone",
          type: "number",
          widget: "numberInput",
          description: "Chọn số điện thoại",
          dependencies: {}
        },
        password: {
          title: "Password",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập mật khẩu",
          dependencies: {}
        },
        birthday: {
          title: "Birthday",
          type: "string",
          widget: "date",
          displayFormat: "YYYY/MM/DD",
          formatDate: "date",
          description: "Chọn ngày sinh",
          dependencies: {},
          format: "date-time",
          toDate: true
        },
        role_system: {
          type: "string",
          widget: "select",
          choices: [
            {
              key: "user",
              value: "user"
            },
            {
              key: "manager",
              value: "manager"
            },
            {
              key: "admin",
              value: "admin"
            }
          ],
          default: "user",
          title: "Role system",
          hidden: false,
          dependencies: {},
          enum: [
            "user",
            "manager",
            "admin"
          ]
        },
        is_active: {
          title: "Active",
          type: "boolean",
          default: "true",
          widget: "boolean",
          description: "Chọn trạng thái",
          dependencies: {}
        },
        role: {
          type: [
            "array",
            "null",
            "string"
          ],
          typeRelation: {
            _id: "role-settings",
            title: "role",
            type: "n-1",
            filter: {
              combinator: "and",
              id: "00d93f0c-e8f4-4b4c-98bc-f311f032c191",
              rules: []
            }
          },
          widget: "relation",
          title: "Role",
          description: "Chọn role cho user",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        role_name: {
          title: "Role Name",
          type: "string",
          widget: "shortAnswer",
          hidden: true,
          dependencies: {}
        }
      },
      required: [
        "username",
        "email",
        "role_system",
        "is_active",
        "role"
      ],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [
      {
        locale: "vi",
        slug: "user"
      },
      {
        locale: "en",
        slug: "user"
      }
    ],
    entity_setting: {},
    tenant_id: null,
    updated_at: new Date("2025-10-08T09:07:36.000Z"),
    created_at: "8/26/2025, 3:07:30 PM",
    use_approval_process: false,
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    status: "1",
    comment_mode: false,
    use_slug: false
  };
}