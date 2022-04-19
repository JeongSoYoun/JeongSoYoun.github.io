import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import styled from 'styled-components'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Tag>{node.frontmatter.tag}</Tag>
        <p style={{ fontSize: 10 }}>{node.frontmatter.date}</p>
      </div>
      <div className="header">
        <h3>{node.frontmatter.title}</h3>
      </div>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)

const Tag = styled.div`
  border-radius: 5px;
  height: 20px;
  padding: 3px 5px;
  background-color: #1bceb3;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: black;
`
