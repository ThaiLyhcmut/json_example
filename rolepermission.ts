module.exports = function () {
  return {
    _id: "68be5c04ebcb0630edf56700",
    is_active: true,
    meta_data: {},
    title: "RolePermission",
    mongodb_collection_name: "rolepermission",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    use_timestamp: true,
    use_approval_process: false,
    public_entity: false,
    json_schema: {
      type: "object",
      properties: {
        entity: {
          title: "entity",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        role_base: {
          title: "role_base",
          type: "string",
          widget: "shortAnswer",
          dependencies: {}
        },
        permission: {
          title: "permission",
          type: "array",
          items: {
            type: "object",
            dependencies: {}
          },
          dependencies: {}
        },
        rule: {
          title: "rule",
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
              id: "d391a9f1-1981-430b-ab70-85010672afae"
            }
          },
          dependencies: {},
          items: {
            type: "string"
          }
        },
        scope: {
          title: "Scope",
          type: "string",
          widget: "select",
          choices: [
            {
              key: "self",
              value: "self"
            },
            {
              key: "all",
              value: "all"
            }
          ],
          default: "all",
          dependencies: {},
          enum: [
            "self",
            "all"
          ]
        }
      },
      required: [],
      dependencies: {},
      additionalProperties: false
    },
    entity_setting: {},
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-09-08T11:31:00.000Z"),
    updated_at: new Date("2025-09-11T15:58:29.000Z"),
    status: 1,
    use_posttype: false,
    slug: "rolepermission",
    use_slug: false
  };
}