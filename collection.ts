module.exports = function () {
  return {
    _id: "68b178b9edfffa778bfd0c65",
    title: "collection",
    mongodb_collection_name: "collection",
    entity_group: [],
    unique_keys: "",
    use_parent_delete_childs: false,
    is_active: true,
    json_schema: {
      type: "object",
      properties: {
        title: {
          title: "Title",
          description: "Nhập tên collection",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        slug: {
          widget: "UriKeyGen",
          depend_field: "root_title",
          description: "Nhập slug cho collection",
          title: "Slug",
          type: "string",
          expanded: true,
          filter: true,
          dependencies: {}
        },
        entity: {
          type: [
            "array",
            "null",
            "string"
          ],
          description: "Chọn entity",
          typeSelect: "once",
          widget: "relation",
          title: "Entity",
          expanded: true,
          filter: true,
          typeRelation: {
            _id: "entity",
            title: "entity",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "9719ef12-49f8-446e-9a87-e02cf7b884ff"
            }
          },
          dependencies: {},
          items: {
            type: "string"
          }
        },
        conditions: {
          type: "object",
          description: "Chọn điều kiện",
          widget: "condition",
          title: "Conditions",
          expanded: true,
          fieldRelation: "entity",
          dependencies: {}
        }
      },
      required: [
        "title",
        "slug",
        "entity"
      ],
      dependencies: {},
      additionalProperties: false
    },
    use_approval_process: false,
    public_entity: false,
    use_timestamp: true,
    use_posttype: false,
    updated_by: "68a6a4a7e731734fad2cffae",
    created_by: "68a6a4a7e731734fad2cffae",
    entity_setting: {},
    meta_data: {},
    updated_at: new Date("2025-09-06T10:37:21.000Z")
  };
}