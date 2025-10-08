module.exports = function () {
  return {
    _id: "6851234aa873ff8528821359",
    title: "Post Type Content",
    mongodb_collection_name: "post-type-content",
    unique_keys: "",
    json_schema: {
      type: "object",
      properties: {
        post_type: {
          type: [
            "array",
            "null",
            "string"
          ],
          typeRelation: {
            _id: "entity",
            title: "entity",
            type: "1-n",
            filter: {
              combinator: "and",
              rules: [],
              id: "0470377a-450e-417d-b151-6e62aaaa50d6"
            }
          },
          widget: "relation",
          typeSelect: "multiple",
          title: "Post Type",
          hidden: true,
          filter: true,
          refValue: "mongodb_collection_name",
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
    languages: [],
    is_active: true,
    use_locale: true,
    use_parent: false,
    use_parent_delete_childs: false,
    use_block: false,
    use_content_review: false,
    use_like: false,
    use_comment: false,
    use_save: false,
    use_seo_path: false,
    entity_group: [],
    created_by: "68a6a4a7e731734fad2cffae",
    updated_by: "68bff24bea9a0fc2edb3164e",
    created_at: new Date("2025-06-17T08:11:54.664Z"),
    updated_at: new Date("2025-10-08T09:05:29.000Z"),
    entity_setting: {
      fe_list: "post_type,\ntitle,\nslug,\ncategory.title,\ncategory.slug,\nfeatured_image.disk,\nfeatured_image.fileName,\nfeatured_image.mimeType,\nfeatured_image.bucketName,\nfeatured_image.path,\nattachments.fileName,\nattachments.mimeType,\nattachments.bucketName,\nattachments.path,\nis_pinned,\nlocale,\nlocale_id,\ncreated_by.username,\ncreated_by.featured_image.disk,\ncreated_by.featured_image.fileName,\ncreated_by.featured_image.path,\ncreated_by.full_name,\ncreated_at,\nupdated_at,\nblocks_position,\nshort_description,\nsession_tags.investment_consultant.title,\nsession_tags.investment_consultant.slug,\nsession_tags.investment_consultant.tag_group.title,\nsession_tags.investment_consultant.tag_group.slug,\nsession_tags.market_report_amount.title,\nsession_tags.market_report_amount.slug,\nsession_tags.market_report_amount.tag_group.title,\nsession_tags.market_report_amount.tag_group.slug,\nsession_tags.transaction_fee.title,\nsession_tags.transaction_fee.slug,\nsession_tags.transaction_fee.tag_group.title,\nsession_tags.transaction_fee.tag_group.slug,\nsession_tags.year.title,\nsession_tags.year.slug,\nsession_tags.year.tag_group.title,\nsession_tags.year.tag_group.slug,\nsession_tags.session_tags_work_location.title,\nsession_tags.session_tags_work_location.slug,\nsession_tags.session_tags_work_location.tag_group.title,\nsession_tags.session_tags_work_location.tag_group.slug,\nsession_tags.session_tags_job_position.title,\nsession_tags.session_tags_job_position.slug,\nsession_tags.session_tags_job_position.tag_group.title,\nsession_tags.session_tags_job_position.tag_group.slug,\nsession_tags.session_tags_salary.title,\nsession_tags.session_tags_salary.slug,\nsession_tags.session_tags_salary.tag_group.title,\nsession_tags.session_tags_salary.tag_group.slug,\nsession_tags.session_tags_experience.title,\nsession_tags.session_tags_experience.slug,\nsession_tags.session_tags_experience.tag_group.title,\nsession_tags.session_tags_experience.tag_group.slug,\napplication_deadline,\nvacant_total,\nsession_product_tags.investment_amount.title,\nsession_product_tags.investment_amount.slug,\nsession_product_tags.investment_amount.tag_group.title,\nsession_product_tags.investment_amount.tag_group.slug,\nsession_product_tags.investment_time.title,\nsession_product_tags.investment_time.slug,\nsession_product_tags.investment_time.tag_group.title,\nsession_product_tags.investment_time.tag_group.slug,\nsession_product_tags.purpose.title,\nsession_product_tags.purpose.slug,\nsession_product_tags.purpose.tag_group.title,\nsession_product_tags.purpose.tag_group.slug,\ncta_button.href,\ncta_button.relation._id,\ncta_button.relation.title,\ncta_button.relation.slug,\ncta_button.relation.meta_data.slug,\ncta_button.relation.meta_data.type,\ncta_button.title,\ncta_button.typeUrl,\nadvanced_product_info,\nis_root,\npublish_end,\npublish_start,\nlanguages,\nmeta_data.slug,\nmeta_data.type,\nmeta_data.redirect_to,\nmeta_data.path"
    },
    settings: {},
    public_entity: true,
    use_approval_process: false,
    use_timestamp: true,
    use_posttype: false,
    meta_data: {},
    status: "1",
    use_slug: true,
    slug: "post-type-content",
    comment_mode: false
  };
}