module.exports = function () {
  return {
    _id: "6829b8137ac4234f467160c0",
    title: "seopath",
    mongodb_collection_name: "seopath",
    languages: [],
    is_active: true,
    use_locale: false,
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
    created_at: new Date("2025-05-18T10:36:03.902Z"),
    updated_at: new Date("2025-09-10T12:10:30.000Z"),
    entity_setting: {},
    json_schema: {
      type: "object",
      properties: {
        related_id: {
          widget: "shortAnswer",
          title: "Related ID",
          type: "string",
          filter: true,
          dependencies: {}
        },
        entity_id: {
          type: [
            "array",
            "null",
            "string"
          ],
          typeRelation: {
            _id: "entity",
            title: "entity",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "0baa4cb2-936a-4b3c-8455-0636bd11bd50"
            }
          },
          widget: "relation",
          typeSelect: "multiple",
          title: "Entity ID",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        entity_slug: {
          type: [
            "array",
            "null",
            "string"
          ],
          typeRelation: {
            _id: "entity",
            title: "entity",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "0baa4cb2-936a-4b3c-8455-0636bd11bd50"
            }
          },
          widget: "relation",
          typeSelect: "multiple",
          title: "Entity Slug",
          filter: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        slug: {
          type: "string",
          widget: "shortAnswer",
          filter: true,
          title: "Slug",
          dependencies: {}
        },
        locale: {
          title: "Locale",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        locale_id: {
          type: "string",
          widget: "shortAnswer",
          filter: true,
          title: "Locale ID",
          dependencies: {}
        }
      },
      required: [
        "related_id",
        "entity_id",
        "entity_slug",
        "slug",
        "locale",
        "locale_id"
      ],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    meta_data: {},
    unique_keys: "",
    use_slug: false
  };
}