module.exports = function () {
  return {
    _id: "68b7f64984d7d2aaefa028ca",
    title: "Block Content",
    mongodb_collection_name: "block-content",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    is_active: 1,
    json_schema: {
      type: "object",
      properties: {
        entity: {
          title: "Entity",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        entity_content: {
          title: "Entity Content",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        groupfield_id: {
          filter: true,
          title: "Group Field ID",
          type: "string",
          typeRelation: {
            entity: "entity",
            title: "all-entity",
            type: "1-n"
          },
          typeSelect: "multiple",
          widget: "shortAnswer",
          dependencies: {}
        },
        key: {
          title: "Key",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        group: {
          title: "Group",
          type: "string",
          widget: "shortAnswer",
          filter: false,
          dependencies: {}
        },
        content: {
          title: "Content",
          type: "object",
          dependencies: {}
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    public_entity: true,
    use_timestamp: true,
    use_posttype: false,
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    use_approval_process: false,
    tenant_id: null,
    updated_at: new Date("2025-10-08T11:44:59.000Z"),
    entity_setting: {
      fe_list: "entity,\nentity_content,\ngroupfield_id,\nkey,\ngroup,\ncontent"
    },
    meta_data: {},
    comment_mode: false,
    status: "1",
    use_slug: false
  };
}