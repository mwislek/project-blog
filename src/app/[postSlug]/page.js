import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params: { postSlug }})  {
  const blogPost = await loadBlogPost(postSlug)
  const { frontmatter: { title, abstract: description } } = blogPost

  return {
    title,
    description,
  }
}

async function BlogPost({ params: { postSlug }}) {
  const blogPost = await loadBlogPost(postSlug)
  const { frontmatter, content } = blogPost
  const { title, publishedOn } = frontmatter

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={title}
        publishedOn={publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
