module.exports = function () {
  return {
    _id: "681c39e90800af97de942198",
    title: "Tag Group",
    mongodb_collection_name: "tag-group",
    json_schema: {
      type: "object",
      properties: {
        title: {
          widget: "shortAnswer",
          title: "Title",
          type: "string",
          filter: true,
          description: "Nhập thông tin title",
          dependencies: {}
        },
        slug: {
          widget: "UriKeyGen",
          title: "Slug",
          type: "string",
          depend_field: "root_title",
          hidden: false,
          filter: true,
          description: "Nhập thông tin slug",
          dependencies: {}
        },
        is_active: {
          widget: "boolean",
          appearance: "switch",
          title: "Active",
          type: "boolean",
          default: true,
          description: "Chọn status cho tag group",
          dependencies: {}
        },
        locale_id: {
          widget: "shortAnswer",
          title: "Locale ID",
          type: "string",
          hidden: true,
          filter: true,
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
        slug: "tag-group"
      },
      {
        locale: "en",
        slug: "tag-group"
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
    use_seo_path: true,
    entity_group: [],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-05-08T04:58:17.782Z"),
    updated_at: new Date("2025-09-10T08:13:08.000Z"),
    entity_setting: {},
    settings: {},
    unique_keys: "",
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    meta_data: {},
    use_slug: false
  };
}