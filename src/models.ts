export interface Blogs {
    _id: string,
    title: string,
    auth: string,
    createdAt: string,
    sanitizedHtml: string
}

export interface BlogPosts {
    title: string,
    auth: string,
    markdown: string
}