import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decoradores/roles.decorator';
import { Rol, PayloadJwt } from '../dominio/usuario';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rolesRequeridos = this.reflector.getAllAndOverride<Rol[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!rolesRequeridos) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const usuario = req.user as PayloadJwt;

    if (!usuario) {
      return false;
    }

    const tieneRol = rolesRequeridos.includes(usuario.rol);
    if (!tieneRol) {
      throw new ForbiddenException('No tienes permisos para cancelar inscripciones');
    }

    return true;
  }
}