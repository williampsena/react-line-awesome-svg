import React from 'react'
import { create } from 'react-test-renderer'
import { LineAwesome } from '../components/line-awesome'
import { SvgThumbsUp } from '../icons'

describe('LineAwesome component', () => {
    test('Matches the snapshot"', () => {
        const icon = create(<LineAwesome icon={SvgThumbsUp} />)
        expect(icon.toJSON()).toMatchSnapshot()
    })
})
