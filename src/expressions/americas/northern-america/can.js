// @flow
// Canada
// cnc ncn
// impossible first digits are D,F,I,O,Q,U,W,Z
// impossible third digits are D,F,I,O,Q,U
// impossible fifth digits are D,F,I,O,Q,U

export default /^(?![DFIOQUWZ])[A-Z][0-9](?![DFIOQU])[A-Z] [0-9](?![DFIOQU])[A-Z][0-9]$/;
