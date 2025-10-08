module.exports = function () {
  return {
    _id: "68aeb97c19ad9c417a2b983a",
    is_active: true,
    meta_data: {},
    title: "role",
    mongodb_collection_name: "role",
    entity_group: [],
    use_parent_delete_childs: false,
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
        permission: {
          title: "permission",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          hidden: true,
          dependencies: {}
        },
        rule: {
          title: "Rule",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            _id: "rule",
            title: "rule",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "d036ceb7-844c-447f-90cf-10e444c7ee40"
            }
          },
          typeSelect: "multiple",
          dependencies: {},
          items: {
            type: "string"
          }
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    entity_setting: {},
    tenant_id: null,
    use_approval_process: false,
    public_entity: false,
    use_timestamp: true,
    use_posttype: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    comment_mode: false,
    status: "1",
    unique_keys: "",
    updated_at: new Date("2025-10-03T08:10:47.000Z"),
    use_slug: false
  };
}