import Linkify from 'linkify-react';
import { StyledDescription } from './Description.styles';

export const Description = ({description}) => {
  const renderLink = ({ attributes, content }) => {
    const { href, ...props } = attributes;
    return (
      <a
        target='_blank'
        rel='noreferrer'
        href={href} {...props}>
        {content}
      </a>
    );
  };

  return (
    <StyledDescription>
      <Linkify as='p' options={{ render: renderLink }}>
        {description}
      </Linkify>
    </StyledDescription>
  )
};
