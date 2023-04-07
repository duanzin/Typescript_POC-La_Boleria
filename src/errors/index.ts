export function DuplicatedCakeError() {
  return {
    name: "DuplicatedCakeError",
    message: "There is already a cake with this name",
  };
}

export function conflictError(message: any) {
  return {
    name: "ConflictError",
    message,
  };
}

export function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}
