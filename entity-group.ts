module.exports = function () {
  return {
    _id: "674e88f1033700ce36e9f025",
    title: "entity group",
    mongodb_collection_name: "entity-group",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "title",
          type: "string",
          widget: "shortAnswer",
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
    languages: [],
    is_active: true,
    use_locale: false,
    use_parent: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    entity_group: null,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2024-12-03T04:28:33.297Z"),
    updated_at: new Date("2024-12-03T04:28:33.297Z"),
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}