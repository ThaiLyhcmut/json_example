module.exports = function () {
  return {
    _id: "68c776c7f39e30a4af29f923",
    title: "Comment",
    mongodb_collection_name: "comment",
    entity_group: [],
    unique_keys: "",
    use_parent: true,
    use_parent_delete_childs: false,
    use_history: true,
    use_timestamp: true,
    use_approval_process: true,
    use_slug: false,
    public_entity: true,
    is_active: 1,
    json_schema: {
      type: "object",
      properties: {
        comment: {
          widget: "longAnswer",
          customRole: "textarea",
          title: "Comment",
          type: "string",
          filter: true,
          dependencies: {}
        },
        customer_name: {
          title: "Customer Name",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        post_type_content: {
          title: "Page submit",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            _id: "post-type-content",
            title: "post-type-content",
            type: "n-1",
            filter: {
              combinator: "and",
              rules: [],
              id: "7e176707-b9bf-4072-86b2-f872362d186e"
            }
          },
          filter: true,
          hidden: true,
          dependencies: {},
          items: {
            type: "string"
          }
        },
        email: {
          title: "Email",
          type: "string",
          widget: "shortAnswer",
          filter: true,
          dependencies: {}
        },
        parent_id: {
          title: "Parent ID",
          type: [
            "array",
            "null",
            "string"
          ],
          widget: "relation",
          typeRelation: {
            title: "comment",
            id: "comment"
          },
          filter: false,
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
    created_by: "68bff24bea9a0fc2edb3164e",
    updated_by: "68bff24bea9a0fc2edb3164e",
    slug: "comment",
    created_at: new Date("2025-09-15T09:15:35.000Z"),
    updated_at: new Date("2025-10-08T14:48:48.000Z"),
    mongodb_save_data: "comment",
    comment_mode: true,
    status: "1",
    entity_setting: {
      fe_list: "comment,\ncustomer_name,\npost_type_content,\nemail,\ncreated_at,\nupdated_at,\nparent_id,\nis_root,\nchildren_count"
    }
  };
}