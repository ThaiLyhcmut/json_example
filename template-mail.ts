module.exports = function () {
  return {
    _id: "68416d02dac1d6538a3a9c1c",
    title: "Template Mail",
    mongodb_collection_name: "template-mail",
    unique_keys: "",
    json_schema: {
      type: "object",
      properties: {
        title: {
          type: "string",
          widget: "shortAnswer",
          title: "Title",
          filter: true,
          dependencies: {}
        },
        slug: {
          widget: "UriKeyGen",
          title: "Slug",
          type: "string",
          depend_field: "root_title",
          hidden: false,
          filter: true,
          dependencies: {}
        },
        notification_mail: {
          title: "Notification mail",
          type: "object",
          properties: {
            send_subject: {
              type: "string",
              widget: "shortAnswer",
              title: "Send Subject",
              dependencies: {}
            },
            send_to_bcc: {
              type: "string",
              widget: "shortAnswer",
              title: "BCC",
              dependencies: {}
            },
            send_to_cc: {
              type: "string",
              widget: "shortAnswer",
              title: "CC",
              dependencies: {}
            },
            send_to: {
              type: "string",
              widget: "shortAnswer",
              title: "Send To",
              "format-data": "email",
              dependencies: {},
              format: "email"
            },
            send_body: {
              widget: "longAnswer",
              customRole: "texteditor",
              title: "Send Body",
              type: "string",
              default: "<p>Họ và tên : [mg_1431_field] Giới tính : [mg_1432_field] Số điện thoại : [mg_1433_field] Email : [mg_1434_field] Thông tin cần tư vấn : [mg_1435_field]</p>",
              dependencies: {}
            },
            is_active: {
              type: "boolean",
              default: false,
              widget: "boolean",
              title: "Is Active",
              dependencies: {}
            }
          },
          required: [],
          dependencies: {},
          additionalProperties: false
        },
        reply_mail: {
          title: "Reply mail",
          type: "object",
          properties: {
            send_subject: {
              type: "string",
              widget: "shortAnswer",
              title: "Send Subject",
              dependencies: {}
            },
            send_to: {
              type: "string",
              widget: "shortAnswer",
              title: "Send To",
              "format-data": "email",
              dependencies: {},
              format: "email"
            },
            send_body: {
              widget: "longAnswer",
              customRole: "texteditor",
              title: "Send Body",
              type: "string",
              default: "<p>Họ và tên : [mg_1431_field] Giới tính : [mg_1432_field] Số điện thoại : [mg_1433_field] Email : [mg_1434_field] Thông tin cần tư vấn : [mg_1435_field]</p>",
              dependencies: {}
            },
            is_active: {
              title: "Is Active",
              type: "boolean",
              default: false,
              widget: "boolean",
              dependencies: {}
            }
          },
          required: [],
          dependencies: {},
          additionalProperties: false
        },
        locale_id: {
          type: "string",
          widget: "shortAnswer",
          title: "Locale ID",
          filter: true,
          hidden: true,
          dependencies: {}
        },
        locale: {
          type: "string",
          widget: "shortAnswer",
          title: "Locale",
          filter: true,
          hidden: true,
          dependencies: {}
        }
      },
      required: [
        "title",
        "slug"
      ],
      dependencies: {},
      additionalProperties: false
    },
    languages: [
      {
        locale: "vi",
        slug: "template-mail"
      },
      {
        locale: "en",
        slug: "template-mail"
      }
    ],
    is_active: true,
    use_locale: true,
    use_parent: false,
    use_parent_delete_childs: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    use_seo_path: false,
    entity_group: [],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-06-05T10:10:10.313Z"),
    updated_at: new Date("2025-10-02T15:00:48.000Z"),
    entity_setting: {},
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    status: "1",
    use_slug: false,
    comment_mode: false
  };
}