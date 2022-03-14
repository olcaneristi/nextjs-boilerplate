//
// Index Page
// ...
//

import useTranslation from 'next-translate/useTranslation'
import Auth from '@/components/auth/auth'
import Layout from '@/components/layout/layout'

function Index(): JSX.Element {
    const { t } = useTranslation()
    const title = t('home:title')
    const description = t('home:description')

    return (
        <Layout title={title} description={description}>
            <Auth />
        </Layout>
    )
}

export default Index

//
// END
//
