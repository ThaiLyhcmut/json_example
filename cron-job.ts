module.exports = function () {
  return {
    _id: "6819720a15cf915ba520aff7",
    title: "cron job",
    mongodb_collection_name: "cron-job",
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
        cron_expression: {
          title: "cron_expression",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        collection_name: {
          title: "collection_name",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        arrgregate: {
          title: "arrgregate",
          type: "string",
          widget: "function",
          dependencies: {}
        },
        setup: {
          items: {
            type: "object",
            dependencies: {},
            properties: {
              merge: {
                widget: "longAnswer",
                customRole: "textarea",
                title: "merge",
                type: "string"
              }
            },
            additionalProperties: false
          },
          title: "setup",
          type: "array",
          dependencies: {}
        }
      },
      required: [
        "title",
        "cron_expression"
      ],
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
    entity_group: [],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2025-05-06T02:20:58.923Z"),
    updated_at: new Date("2025-09-09T11:17:51.000Z"),
    entity_setting: {},
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    unique_keys: ""
  };
}