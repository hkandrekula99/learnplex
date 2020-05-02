import React from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb, Col, Row } from 'antd'

import { SEO } from '../../../../components/SEO'
import { titleCase, upperCamelCase } from '../../../../utils/upperCamelCase'
import Sidebar from '../../../../components/learn/Sidebar'
import { useSections } from '../../../../lib/hooks/useSections'

export default function ViewResourceIndex() {
  const router = useRouter()
  const resourceSlug = router.query.resource as string
  const username = router.query.username as string
  const { baseSectionId, sectionsMap, body } = useSections({
    resourceSlug,
    username,
  })

  return (
    <>
      <SEO title={`Learn ${upperCamelCase(resourceSlug)}`} />
      {body ? (
        body
      ) : (
        <Row>
          <Col span={6}>
            <Sidebar
              sectionsMap={sectionsMap}
              baseSectionId={baseSectionId}
              inEditMode={false}
              breadCrumb={
                <Breadcrumb className={'text-center'}>
                  <Breadcrumb.Item>
                    {titleCase(resourceSlug)} Index
                  </Breadcrumb.Item>
                </Breadcrumb>
              }
            />
          </Col>
        </Row>
      )}
    </>
  )
}