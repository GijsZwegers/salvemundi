import { User } from '../../entities/user.entity';
import { IUserService } from './iuser.service';
import { Scope } from 'src/entities/scope.entity';

const randomUser: User = new User();
randomUser.id = 1;
randomUser.pcn = 'i123456';
randomUser.firstName = 'Random';
randomUser.lastName = 'User';
randomUser.birthday = new Date(1990, 1, 1);
randomUser.address = 'Rachelsmolen 1';
randomUser.postalcode = '5612 MA';
randomUser.city = 'Eindhoven';
randomUser.country = 'Nederland';
randomUser.phoneNumber = '+31 6 12346789';
randomUser.email = 'admin@gmail.com';
randomUser.password = 'admin';
randomUser.registeredSince = new Date();
randomUser.member = null;
randomUser.scopes = [
    new Scope('user:read', 1),
    new Scope('user:write', 2),
    new Scope('user:delete', 3),
    new Scope('commission:write', 4),
    new Scope('commission:delete', 5),
];

export default randomUser;
export class MockUserService implements IUserService {
    readAll(skip: number, take: number): Promise<User[]> {
        return new Promise<User[]>((resolve) => {
            resolve([randomUser]);
        });
    }

    readOne(id: string | number): Promise<User> {
       return new Promise<User>((resolve) => {
            if (id === 1) {
                resolve(randomUser);

            } else {
                resolve(undefined);
            }
        });
    }

    create(user: User): Promise<User> {
        return new Promise<User>((resolve) => {
            user.id = 2;
            resolve(user);
        });
    }

    update(user: User): Promise<User> {
        return new Promise<User>((resolve) => {
            resolve(user);
        });
    }

    delete(user: User): Promise<User> {
        return new Promise<User>((resolve) => {
            resolve(user);
        });
    }

    exists(email: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            resolve(email === randomUser.email);
        });
    }
}
