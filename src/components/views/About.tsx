import { Box } from '@chakra-ui/react'
import { MyLayout } from '@/components/layouts/MyLayout'
import { MyMarkdown } from '../ui/MyMarkdown'

export const AboutPage = () => {
  return (
    <MyLayout>
      <Box>
        <MyMarkdown className={'znc'}>{aboutContent}</MyMarkdown>
      </Box>
    </MyLayout>
  )
}

const aboutContent = `# 会社名

## 概要

会社名は、革新的なソリューションを提供するテクノロジー企業です。私たちは、最新のテクノロジーを駆使して、お客様のビジネスをサポートし、問題解決に取り組んでいます。

## ビジョン

私たちのビジョンは、世界中の人々の生活をより豊かにすることです。テクノロジーの力を活用して、新たな価値を創造し、社会にポジティブな影響を与えることを目指しています。

## ミッション

私たちのミッションは、革新的なソリューションを提供することで、お客様の成功を支援することです。お客様のニーズに合わせたカスタマイズされたソリューションを提供し、ビジネスの成長を促進します。

## 製品とサービス

- 製品A: 高度な機能を備えた製品Aは、お客様のビジネスプロセスを最適化し、効率を向上させます。
- 製品B: 製品Bは、革新的なデザインと使いやすさを兼ね備えた製品で、市場での競争力を高めます。
- サービスA: サービスAは、24時間365日体制でお客様をサポートし、問題解決に迅速に対応します。

## 連絡先

会社名
住所: 〒000-0000 住所1-2-3
電話: 012-345-6789
メール: info@example.com
ウェブサイト: [www.example.com](http://www.example.com)`
