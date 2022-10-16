import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import { result } from "./DateToNow"
import PropTypes from 'prop-types';

export const BlogCard = ({ poster, tag, title, description, userName, avatar, postedAt }) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster
          src={poster}
          alt="card__image"
        />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>
          {description}
        </CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={userName} />
          <UserInfo>
            <UserName>{userName}</UserName>
            <Date>{result(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
    );
};

BlogCard.propTypes = {
  poster: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  userName: PropTypes.string,
  avatar: PropTypes.string,
  postedAt: PropTypes.string
}