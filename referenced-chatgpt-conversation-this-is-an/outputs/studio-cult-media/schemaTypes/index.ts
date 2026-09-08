import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {UserIcon} from '@sanity/icons/User'
import {TagIcon} from '@sanity/icons/Tag'
import {ImageIcon} from '@sanity/icons/Image'

const editorialImage = defineType({name:'editorialImage', title:'Image', type:'image', icon:ImageIcon, options:{hotspot:true}, fields:[
  defineField({name:'alt', title:'Image description', type:'string', validation:r=>r.required()}),
  defineField({name:'caption', type:'string'}),
  defineField({name:'credit', type:'string'}),
]})
const body = defineType({name:'body', title:'Content', type:'array', of:[
  defineArrayMember({type:'block', styles:[{title:'Normal',value:'normal'},{title:'Heading',value:'h2'},{title:'Subheading',value:'h3'},{title:'Quote',value:'blockquote'}]}),
  defineArrayMember({type:'editorialImage'}),
]})
const seo = defineType({name:'seo', title:'Search & sharing', type:'object', icon:DocumentTextIcon, fields:[
  defineField({name:'title', title:'SEO title', type:'string', validation:r=>r.max(60).warning()}),
  defineField({name:'description', type:'text', rows:3, validation:r=>r.max(160).warning()}),
  defineField({name:'image', title:'Social sharing image', type:'editorialImage'}),
]})
const common = [
  defineField({name:'title', type:'string', validation:r=>r.required()}),
  defineField({name:'slug', type:'slug', options:{source:'title'}, validation:r=>r.required()}),
  defineField({name:'excerpt', type:'text', rows:3, validation:r=>r.required().max(300)}),
  defineField({name:'coverImage', type:'editorialImage'}),
  defineField({name:'body', type:'body'}),
  defineField({name:'seo', type:'seo'}),
]
const author = defineType({name:'author', title:'Authors', type:'document', icon:UserIcon, fields:[
  defineField({name:'name',type:'string',validation:r=>r.required()}),
  defineField({name:'bio',type:'text'}),
  defineField({name:'portrait',type:'editorialImage'}),
]})
const category = defineType({name:'category',title:'Categories',type:'document',icon:TagIcon,fields:[
  defineField({name:'title',type:'string',validation:r=>r.required()}),
  defineField({name:'slug',type:'slug',options:{source:'title'},validation:r=>r.required()}),
]})
const post = defineType({name:'post',title:'Blog posts',type:'document',icon:DocumentTextIcon,fields:[...common,
  defineField({name:'author',type:'reference',to:[{type:'author'}]}),
  defineField({name:'categories',type:'array',of:[defineArrayMember({type:'reference',to:[{type:'category'}]})]}),
  defineField({name:'publishedAt',title:'Article date',type:'datetime',description:'Display date only. Use Publish to publish; this field does not schedule publication.',validation:r=>r.required()}),
],preview:{select:{title:'title',media:'coverImage'}}})
const caseStudy = defineType({name:'caseStudy',title:'Case studies',type:'document',icon:DocumentTextIcon,fields:[...common,
  defineField({name:'projectType',type:'string',options:{list:['Client work','Self-initiated concept']},validation:r=>r.required()}),
  defineField({name:'disciplines',type:'array',of:[defineArrayMember({type:'string'})]}),
  defineField({name:'gallery',type:'array',of:[defineArrayMember({type:'editorialImage'})]}),
  defineField({name:'videoUrl',title:'Hosted video URL',type:'url',description:'Use a video hosting service such as Vimeo or YouTube.'}),
],preview:{select:{title:'title',media:'coverImage'}}})
export const schemaTypes = [editorialImage, body, seo, author, category, post, caseStudy]
