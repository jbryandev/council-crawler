// import { User } from '@prisma/client';
import { type AvatarProps } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { type User } from '@/types';

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'firstName' | 'lastName'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ''}${
    user?.lastName?.charAt(0) ?? ''
  }`;

  return (
    <Avatar {...props}>
      <AvatarImage alt='Picture' src={user.image || ''} />
      <AvatarFallback className='text-sm'>{initials}</AvatarFallback>
    </Avatar>
  );
}
