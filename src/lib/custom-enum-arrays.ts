import ts, {EnumDeclaration, EnumMember} from 'typescript';

type TypeCacheRecord = {
    kind: ts.SyntaxKind,
    aliasedTo: ts.SyntaxKind,
    node: ts.Node,
};

export const customEnumArrays = (typeName: string, types: Record<string, TypeCacheRecord>) => {
    if (typeName === 'PermissionRoleResponseActionsEnum') {
        const node = types[typeName].node as EnumDeclaration;
        const keys = Object.keys(node.members);

        return keys.map(k => node.members[k as any])
            .filter((k: EnumMember) => k.name)
            .map((k: EnumMember) => k.name.getText());
    }

    return null;
};
