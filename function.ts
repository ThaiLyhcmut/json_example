module.exports = function () {
  return {
    _id: "67209f43e51ae7bcbb78b19e",
    title: "Function",
    mongodb_collection_name: "function",
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          type: "string",
          widget: "shortAnswer",
          description: "Nhập title cho function",
          hidden: false,
          filter: true,
          dependencies: {}
        },
        code: {
          title: "Code",
          type: "string",
          widget: "function",
          description: "Nhập code cho function này",
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
    created_at: new Date("2024-10-29T08:39:31.495Z"),
    updated_at: new Date("2024-10-29T09:39:33.523Z"),
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false
  };
}