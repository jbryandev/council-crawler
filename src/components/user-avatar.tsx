// import { User } from '@prisma/client';
import { type AvatarProps } from '@radix-ui/react-avatar';
import nameInitials from 'name-initials';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { type User } from '@/types';

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  const initials = nameInitials(user.name);
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt='Picture' src={user.image} />
      ) : (
        <AvatarFallback>{initials}</AvatarFallback>
      )}
    </Avatar>
  );
}
