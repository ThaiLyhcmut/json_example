module.exports = function () {
  return {
    _id: "6777b517b46e5acc95f40536",
    title: "Menu",
    mongodb_collection_name: "menu",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          expanded: true,
          require: false,
          description: "Nhập title cho menu",
          filter: true,
          dependencies: {}
        },
        groupfield: {
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "group-field",
            _id: "group-field",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "2d14601a-dc33-49cc-9303-6f3b76ab3d21"
            }
          },
          description: "Chọn block",
          title: "Block",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        data: {
          title: "Data",
          type: "object",
          dependencies: {}
        },
        locale_id: {
          widget: "shortAnswer",
          title: "Locale ID",
          type: "string",
          filter: true,
          hidden: true,
          dependencies: {}
        },
        parent_id: {
          title: "Parent ID",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "menu",
            id: "menu"
          },
          dependencies: {},
          items: {
            type: "string"
          }
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    languages: [
      {
        locale: "vi",
        slug: "menu"
      },
      {
        locale: "en",
        slug: "menu"
      }
    ],
    is_active: true,
    use_locale: true,
    use_parent: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    use_seo_path: false,
    entity_group: [],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-01-03T09:59:51.102Z"),
    updated_at: new Date("2025-10-07T13:05:41.000Z"),
    entity_setting: {},
    settings: {},
    use_parent_delete_childs: false,
    unique_keys: "",
    use_pinned: false,
    public_entity: true,
    use_timestamp: true,
    use_soft_delete: true,
    use_slug: true,
    use_history: true,
    use_approval_process: false,
    use_posttype: false,
    status: "1",
    comment_mode: false
  };
}