import { DiscussionEmbed } from "disqus-react";

interface Props {
    url: string;
    id: string;
    title: string;
}

const Comments = ({ url, id, title }: Props) => {
    return (
              <DiscussionEmbed
                  shortname='jmruiz'
                  config={{
                      url: url,
                      identifier: id,
                      title: title
                  }}
              />
    )
};

export default Comments;
