import React from 'react'
import { graphql } from 'gatsby'
import Content from '~components/common/content'
import TableOfContents from '~components/common/table-of-contents'
import Layout from '~components/layout'

const ContentPageTemplate = ({ data, path }) => {
  const { contentfulPage } = data
  return (
    <Layout
      title={contentfulPage.title}
      path={path}
      returnLinks={[
        {
          link: contentfulPage.returnLinkUrl,
          title: contentfulPage.returnLinkTitle,
        },
      ]}
      socialCard={contentfulPage.socialCard}
    >
      {contentfulPage.enableToc &&
        contentfulPage.body.childMarkdownRemark.headings && (
          <TableOfContents
            headings={contentfulPage.childContentfulPageBodyRichTextRichTextNode.json}
          />
        )}
      <Content
        content={
          contentfulPage.childContentfulPageBodyRichTextRichTextNode.json
        }
      />
    </Layout>
  )
}

export default ContentPageTemplate

export const query = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      slug
      contentful_id
      returnLinkTitle
      returnLinkUrl
      enableToc
      childContentfulPageBodyRichTextRichTextNode {
        json
      }
      socialCard {
        description {
          description
        }
        image {
          resize(width: 1200) {
            src
          }
        }
      }
    }
  }
`
