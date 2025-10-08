module.exports = function () {
  return {
    _id: "681c39ae0800af97de94218a",
    title: "Tag",
    mongodb_collection_name: "tag",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          description: "Nhập title cho tag",
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
        tag_group: {
          type: [
            "array",
            "null",
            "string"
          ],
          typeRelation: {
            title: "tag-group",
            _id: "tag-group",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "69d4c901-c507-4482-8837-24faa636b3b5"
            }
          },
          widget: "relation",
          typeSelect: "multiple",
          title: "Tag Group",
          filter: true,
          description: "Chọn tag group",
          dependencies: {},
          items: {
            type: "string"
          }
        },
        is_active: {
          widget: "boolean",
          appearance: "switch",
          title: "Active",
          type: "boolean",
          default: true,
          description: "Chọn status cho tag",
          dependencies: {}
        },
        locale_id: {
          widget: "shortAnswer",
          title: "Locale ID",
          type: "string",
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
        locale: "en",
        slug: "tag"
      },
      {
        locale: "vi",
        slug: "tag"
      }
    ],
    is_active: 1,
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
    created_at: new Date("2025-05-08T04:57:18.753Z"),
    updated_at: new Date("2025-10-08T09:56:58.000Z"),
    entity_setting: {
      fe_list: "title,\nslug,\nlocale_id,\nlocale,\ntag_group(),\ntag_group.title,\ntag_group.slug,\nlanguages,\nmeta_data.slug,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    },
    settings: {},
    unique_keys: "",
    use_pinned: false,
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    meta_data: {},
    comment_mode: false,
    status: "1",
    use_slug: false
  };
}