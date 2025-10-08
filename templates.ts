module.exports = function () {
  return {
    _id: "6825950cad0676ea7016ea80",
    is_active: 1,
    meta_data: {},
    title: "Templates",
    mongodb_collection_name: "templates",
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
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập title",
          filter: true,
          dependencies: {}
        },
        header: {
          title: "Header",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "menu",
            _id: "menu",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "c9a60681-5f29-457d-820f-622a071cdadb"
            }
          },
          description: "Chọn header",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        footer: {
          title: "Footer",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "menu",
            _id: "menu",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "ecd663aa-c88c-4968-b8cc-28eb09a26e18"
            }
          },
          description: "Chọn footer",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        sidebar: {
          title: "Sidebar",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "menu",
            _id: "menu",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "e078d1f2-dd96-471a-81ab-f0bfa8639491"
            }
          },
          description: "Chọn sidebar hiển thị",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        locale_id: {
          widget: "shortAnswer",
          title: "Locale ID",
          type: "string",
          hidden: false,
          filter: false,
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    languages: [
      {
        locale: "vi",
        slug: "templates"
      },
      {
        locale: "en",
        slug: "templates"
      }
    ],
    entity_setting: {},
    tenant_id: null,
    use_approval_process: false,
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    created_at: new Date("2025-08-26T04:03:36.498Z"),
    updated_at: new Date("2025-10-07T11:39:56.000Z"),
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    comment_mode: false,
    status: "1",
    use_slug: false
  };
}