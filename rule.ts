module.exports = function () {
  return {
    _id: "68be5ca08b18cde4db62f3d6",
    title: "Rule",
    mongodb_collection_name: "rule",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    is_active: true,
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
        rule: {
          title: "rule",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        code: {
          title: "code",
          type: "number",
          widget: "numberInput",
          filter: true,
          dependencies: {}
        },
        next_status: {
          title: "next_status",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    use_timestamp: true,
    use_approval_process: false,
    public_entity: true,
    status: 1,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-08T11:33:36.000Z"),
    updated_at: new Date("2025-09-11T16:08:22.000Z"),
    use_posttype: false,
    slug: "rule",
    use_slug: false
  };
}