import { defineField, defineType } from "sanity";



export const promotionCampaign = defineType({
    name :"promotionCampaign",
    title :"promotion Campaign",
    type :"document",
    fields : [
        defineField({
            name :"title",
            title :"Title",
            type :"string"
        }),
        defineField({
            name :"description",
            title :"description",
            type :"text"
        }),
        defineField({
            name :"code",
            title :"Code",
            type : "reference",
            to : [{type :"promotionCode"}]
        })
    ]
})