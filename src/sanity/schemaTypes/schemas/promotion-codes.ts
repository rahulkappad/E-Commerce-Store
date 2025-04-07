import { defineField, defineType } from "sanity";



export const promotionCode = defineType({
    name :"promotionCode",
    title :"promotion Code",
    type :"document",
    fields : [
        defineField({
            name :"code",
            title :"code",
            type :"string"
        }),
        defineField({
            name :"discountpercentage",
            title :"Discount Percentage (%)",
            type :"number"
        }),
        defineField({
            name :"expirationDate",
            title :"Expiration Date",
            type :"date"
        })
    ]
})