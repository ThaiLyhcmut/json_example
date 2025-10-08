module.exports = function () {
  return {
    _id: "6743decf4633668aab2b4179",
    title: "Prompts Tree",
    mongodb_collection_name: "prompts-tree",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        slug: {
          title: "Slug",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        data: {
          title: "Data",
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
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68a6a4a7e731734fad2cffae",
    created_at: new Date("2024-11-25T02:19:59.593Z"),
    updated_at: new Date("2024-11-25T02:19:59.593Z"),
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}