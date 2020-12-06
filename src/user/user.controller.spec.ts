import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn().mockResolvedValue({
              rank: 9002,
              points: 0,
              display_name: 'Ramazan Vapurcu',
              user_id: '32c07b13-ddb0-4910-a063-7940c5b8c3ba',
              country: 'tr',
            }),
            get: jest.fn().mockResolvedValue({
              rank: 9002,
              points: 0,
              display_name: 'Ramazan Vapurcu',
              user_id: '32c07b13-ddb0-4910-a063-7940c5b8c3ba',
              country: 'tr',
            }),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('profile', () => {
    it('should create an user', async () => {
      const result = {
        rank: 9002,
        points: 0,
        display_name: 'Ramazan Vapurcu',
        user_id: '32c07b13-ddb0-4910-a063-7940c5b8c3ba',
        country: 'tr',
      };

      const dto = new CreateUserDto();
      dto.display_name = 'Ramazan Vapurcu';

      expect(userController.createUser('127.0.0.1', dto)).resolves.toEqual(
        result,
      );
    });

    it('should return the user profile', async () => {
      const userId = '32c07b13-ddb0-4910-a063-7940c5b8c3ba';
      const result = {
        rank: 9002,
        points: 0,
        display_name: 'Ramazan Vapurcu',
        user_id: '32c07b13-ddb0-4910-a063-7940c5b8c3ba',
        country: 'tr',
      };

      expect(userController.getUserProfile(userId)).resolves.toEqual(result);
    });
  });
});
