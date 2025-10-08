module.exports = function () {
  return {
    _id: "678f59af70a16e8fa65a8edb",
    title: "ai generated jsx",
    mongodb_collection_name: "ai-generated-jsx",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "title",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        slug: {
          title: "slug",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        imagePath: {
          type: "string",
          widget: "shortAnswer",
          title: "image path",
          dependencies: {}
        },
        sourceJsx: {
          title: "source jsx",
          type: "string",
          widget: "longAnswer",
          customRole: "textarea",
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
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
    entity_group: null,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2025-01-21T08:24:15.447Z"),
    updated_at: new Date("2025-01-21T09:10:44.913Z"),
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}