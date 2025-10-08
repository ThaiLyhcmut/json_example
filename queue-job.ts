module.exports = function () {
  return {
    _id: "6819da03bf114615637f6c86",
    title: "queue job",
    mongodb_collection_name: "queue-job",
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
    entity_group: [
      "6819db74bf114615637f6e20"
    ],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2025-05-06T09:44:35.402Z"),
    updated_at: new Date("2025-05-06T09:53:42.983Z"),
    entity_setting: {},
    json_schema: {
      type: "object",
      properties: {
        title: {
          type: "string",
          widget: "shortAnswer",
          title: "title",
          filter: true,
          dependencies: {}
        }
      },
      required: [
        "title"
      ],
      dependencies: {},
      additionalProperties: false
    },
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}