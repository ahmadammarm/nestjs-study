import { Controller, Get } from '@nestjs/common';

// dengan controller kita bisa menentukan prefix path tanpa harus dideklarasikan di file lain
@Controller('/api/user')
export class UserController {
    // controller untuk mengatur dan memproses http request dan mengembalikan http response
    // controller yang dideklarasikan harus diregistrasikan di module

    @Get()
    findAll() {
        return 'This action returns all users';
    }
}
