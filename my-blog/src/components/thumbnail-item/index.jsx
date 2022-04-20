import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import styled from 'styled-components'
import Image from '../../utils/ImageManager'

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
          padding: 10,
        }}
      >
        <Tag>{node.frontmatter.tag}</Tag>
      </div>
      <div className="body">
        <Image name={node.frontmatter.image} width={150} />
        <div className="info">
          <h3>{node.frontmatter.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Curation>
            <Image
              name={'me'}
              width={20}
              style={{ borderRadius: 20, marginRight: 10 }}
            />
            <p style={{ fontSize: 10 }}>{node.frontmatter.date}</p>
          </Curation>
        </div>
      </div>
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

const Curation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`
