import React from 'react';
import ReactMarkdown from 'react-markdown';
import HtmlToReact from 'html-to-react';
import htmlParser from 'react-markdown/plugins/html-parser';
import { Chart, Charts, Teaser, Article } from '../';

const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const parseHtml = htmlParser({
  isValidNode: () => true,
  processingInstructions: [
    {
      replaceChildren: true,
      shouldProcessNode: node => node.attribs && node.attribs['data-type'],
      processNode: (node, children, index) => {
        const type = node.attribs['data-type'];
        const params = Object.keys(node.attribs).reduce(
          (aggr, item) => ({
            ...aggr,
            [item.split('-')[1]]: node.attribs[item],
          }),
          {},
        );
        if (type === 'article') return <Article {...params} />;
        if (type === 'teaser') return <Teaser {...params} />;
        if (type === 'chart') return <Chart {...params} />;
        if (type === 'charts') return <Charts {...params} />;
        return null;
      },
    },
    {
      shouldProcessNode: () => true,
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ],
});

export default ({ data }) => (
  <ReactMarkdown source={data} escapeHtml={false} astPlugins={[parseHtml]} />
);
