import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommitteeController } from './controllers/committee/committee.controller';
import { CommitteeService } from './services/committee/committee.service';
import { MemberController } from './controllers/member/member.controller';
import { MemberService } from './services/member/member.service';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { AuthorizationController } from './controllers/authorization/authorization.controller';
import { AuthorizationService } from './services/authorization/authorization.service';
import * as ormconfig from './typeormConfig';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DefaultGuard } from './guards/default.guard';
import { JwtModule } from '@nestjs/jwt';
import { ScopeSeeder } from './seed/scope.seed';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [
    CommitteeController,
    MemberController,
    UserController,
    AuthorizationController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: DefaultGuard,
    },
    CommitteeService,
    MemberService,
    UserService,
    AuthorizationService,
    ScopeSeeder,
  ],
})
export class AppModule {}
