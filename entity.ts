module.exports = function () {
  return {
    _id: "674eaf8ac43906b58198de5e",
    is_active: 1,
    meta_data: {},
    title: "Entity",
    mongodb_collection_name: "entity",
    entity_group: [],
    unique_keys: "",
    use_parent: false,
    use_parent_delete_childs: false,
    use_locale: false,
    use_block: false,
    use_seo_path: false,
    use_pinned: false,
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          description: "Nhập thông tin tiêu đề",
          widget: "shortAnswer",
          expanded: true,
          require: true,
          filter: true,
          dependencies: {}
        },
        mongodb_collection_name: {
          title: "Mongodb Collection Name",
          type: "string",
          description: "Nhập thông tin tên collection trong mongodb",
          widget: "UriKeyGen",
          expanded: true,
          require: false,
          filter: true,
          depend_field: "root_title",
          dependencies: {}
        },
        mongodb_save_data: {
          filter: true,
          title: "Mongodb Save Data",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        entity_group: {
          title: "Entity Group",
          type: [
            "array",
            "null",
            "string"
          ],
          description: "Nhập thông tin entity group",
          widget: "relation",
          expanded: true,
          require: false,
          typeRelation: {
            title: "entity-group",
            _id: "entity-group",
            type: "n-1"
          },
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        unique_keys: {
          title: "Index",
          type: "string",
          description: "Nhập thông tin index",
          widget: "function",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_parent: {
          title: "Use Parent",
          type: "boolean",
          description: "Nhập thông tin có sử dụng parent hay không",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_parent_delete_childs: {
          title: "use_parent_delete_childs",
          type: "boolean",
          widget: "boolean",
          expanded: true,
          require: false,
          default: "false",
          dependencies: {}
        },
        use_locale: {
          title: "Use Locale",
          type: "boolean",
          description: "Nhập thông tin có sử dụng locale hay không",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_block: {
          title: "Use Block",
          type: "boolean",
          description: "Sử dụng chức năng lưu lịch sử bài viết",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_soft_delete: {
          description: "Bật xoá mềm",
          expanded: true,
          filter: true,
          require: false,
          title: "Use Soft Delete",
          type: "boolean",
          widget: "boolean",
          dependencies: {}
        },
        use_history: {
          description: "Nhập thông tin có sử dụng block hay không",
          expanded: true,
          filter: true,
          require: false,
          title: "Use History",
          type: "boolean",
          widget: "boolean",
          dependencies: {}
        },
        use_seo_path: {
          title: "Use Seo path",
          type: "boolean",
          description: "Nhập thông tin có sử dụng seo path",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_pinned: {
          title: "Use Pin",
          type: "boolean",
          description: "Nhập thông tin có sử dụng seo path",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_posttype: {
          title: "Use Posttype",
          type: "boolean",
          description: "Nhập thông tin có sử dụng seo path",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          dependencies: {}
        },
        use_formbuilder: {
          title: "Use FormBuilder",
          type: "boolean",
          description: "Nhập thông tin có sử dụng seo path",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          hidden: true,
          dependencies: {}
        },
        use_form_builder: {
          title: "Use Form Builder",
          type: "boolean",
          description: "Nhập thông tin có sử dụng seo path",
          widget: "boolean",
          expanded: true,
          require: false,
          filter: true,
          hidden: true,
          dependencies: {}
        },
        use_timestamp: {
          default: true,
          title: "Use Timestamp",
          type: "boolean",
          widget: "boolean",
          dependencies: {}
        },
        use_approval_process: {
          default: false,
          title: "Use Approval Process",
          type: "boolean",
          widget: "boolean",
          dependencies: {}
        },
        use_slug: {
          default: false,
          title: "Use Slug",
          type: "boolean",
          widget: "boolean",
          dependencies: {}
        },
        public_entity: {
          default: true,
          title: "Public Entity",
          type: "boolean",
          widget: "boolean",
          dependencies: {}
        },
        is_active: {
          title: "Active",
          type: "number",
          widget: "numberInput",
          expanded: true,
          require: false,
          objectKey: "is_active",
          hidden: true,
          dependencies: {}
        },
        published_start: {
          title: "Published Start",
          type: "string",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          objectKey: "published_start",
          hidden: true,
          dependencies: {}
        },
        published_end: {
          title: "Published End",
          type: "string",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          objectKey: "published_end",
          hidden: true,
          dependencies: {}
        },
        json_schema: {
          title: "Json",
          type: "object",
          expanded: true,
          hidden: true,
          widget: "href",
          dependencies: {}
        },
        ui_schema: {
          title: "Json",
          type: "object",
          expanded: true,
          hidden: true,
          widget: "href",
          dependencies: {}
        },
        settings: {
          title: "Json",
          type: "object",
          expanded: true,
          hidden: true,
          widget: "href",
          dependencies: {}
        },
        languages: {
          title: "Languages",
          type: "array",
          description: "Nhập thông tin có sử dụng locale hay không",
          widget: "array",
          expanded: true,
          require: false,
          hidden: true,
          dependencies: {},
          items: {
            type: "object"
          }
        },
        webhooks: {
          title: "Webhooks",
          type: "string",
          widget: "webhooks",
          expanded: true,
          require: false,
          objectKey: "webhooks",
          hidden: true,
          dependencies: {}
        },
        type: {
          title: "type",
          type: "string",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          dependencies: {}
        },
        entity_setting: {
          title: "entity_setting",
          type: "object",
          expanded: true,
          properties: {
            merge_collection: {
              title: "merge_collection",
              type: "string",
              description: "Field này để đăng ký merge dữ liệu vào một collection được chỉ định theo thời gian thực.",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            type: {
              title: "type",
              type: "string",
              widget: "shortAnswer",
              expanded: true,
              require: false,
              dependencies: {}
            },
            fe_list: {
              title: "fe_list",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            },
            fe_detail: {
              title: "fe_detail",
              type: "string",
              widget: "shortAnswer",
              dependencies: {}
            }
          },
          dependencies: {},
          required: [],
          additionalProperties: false
        },
        comment_mode: {
          title: "Comment Mode",
          type: "boolean",
          default: false,
          widget: "boolean",
          dependencies: {}
        }
      },
      required: [
        "title",
        "mongodb_collection_name"
      ],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [],
    type: "oke",
    entity_setting: {},
    tenant_id: null,
    updated_at: new Date("2025-10-07T08:54:15.000Z"),
    created_at: "8/26/2025, 2:59:39 PM",
    use_approval_process: false,
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    updated_by: "68bff24bea9a0fc2edb3164e",
    mongodb_save_data: "entity",
    created_by: "68a6a4a7e731734fad2cffae",
    use_slug: false,
    slug: "entity",
    status: "1",
    comment_mode: false
  };
}