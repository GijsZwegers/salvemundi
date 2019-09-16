import { IUserService } from './iuser.service';
import { User } from '../../entities/user.entity';

export class UserService implements IUserService {

    readAll(skip: number, take: number): Promise<User[]> {
        return User.find({ skip, take });
    }

    readOne(user: number | string): Promise<User> {
        const whereQuery = { id: null, username: null };
        if (typeof user === 'number') {
            whereQuery.id = user;
        } else {
            whereQuery.username = user;
        }
        return User.findOne({ where: whereQuery });
    }

    create(user: User): Promise<User> {
        return user.save();
    }

    update(user: User): Promise<User> {
        return user.save();
    }
}
