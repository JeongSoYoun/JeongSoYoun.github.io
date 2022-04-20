import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import styled from 'styled-components'
import Image from '../../utils/ImageManager'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <div className="body">
        <div className="info">
          <Info>
            <Curation>
              <Image
                name={'me'}
                width={20}
                style={{
                  borderRadius: 20,
                  marginRight: 10,
                  boxShadow: '2px 1px 5px rgb(3, 24, 21)',
                }}
              />
              <p style={{ fontSize: 10 }}>{node.frontmatter.date}</p>
            </Curation>
            <Tag>{node.frontmatter.tag}</Tag>
          </Info>
          <h3 style={{ marginTop: 0, marginBottom: 20, fontSize: 20 }}>
            {node.frontmatter.title}
          </h3>
          <p
            style={{ fontSize: 10 }}
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
        </div>
        <Image
          name={node.frontmatter.image}
          width={80}
          style={{
            objectFit: 'contain',
            boxShadow: '1px 1px 5px rgb(3, 26, 26)',
          }}
        />
      </div>
    </div>
  </Link>
)

const Tag = styled.div`
  border-radius: 5px;
  margin-left: 20px;
  width: 60px;
  height: 18px;
  padding: 0.2px 5px;
  background-color: #1bceb3;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: black;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Curation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
`
